'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    number: 1,
    title: 'Personal Information',
    fields: ['Full Name', 'University', 'Graduation Year']
  },
  {
    number: 2,
    title: 'Career Goal',
    fields: ['Target Role', 'Preferred Company Size', 'Industry']
  },
  {
    number: 3,
    title: 'Skills & Experience',
    fields: ['Programming Languages', 'Frameworks', 'Tools']
  },
  {
    number: 4,
    title: 'Connect Profiles',
    fields: ['GitHub', 'LinkedIn', 'Upload CV']
  },
  {
    number: 5,
    title: 'Ready to Go!',
    fields: ['Your roadmap is ready']
  }
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-50 to-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex items-center ${index < steps.length - 1 ? 'w-full' : ''}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${
                    index <= currentStep
                      ? 'bg-brand-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle2 size={24} />
                  ) : (
                    step.number
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      index < currentStep ? 'bg-brand-600' : 'bg-slate-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <Card className="p-8 shadow-card">
          {currentStep < steps.length - 1 ? (
            <>
              <h1 className="text-3xl font-bold text-slate-950 mb-2">
                {currentStepData.title}
              </h1>
              <p className="text-slate-600 mb-8">
                Step {currentStep + 1} of {steps.length}
              </p>

              <div className="space-y-4 mb-10">
                {currentStepData.fields.map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-slate-950 mb-2">
                      {field}
                    </label>
                    <input
                      type="text"
                      placeholder={`Enter your ${field.toLowerCase()}`}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="flex-1 inline-flex items-center justify-center gap-2"
                >
                  Next <ArrowRight size={18} />
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="text-6xl mb-6">🎉</div>
                <h1 className="text-3xl font-bold text-slate-950 mb-4">
                  Welcome to Futora!
                </h1>
                <p className="text-lg text-slate-600 mb-8">
                  Your career roadmap is ready. Let's get started on building your future.
                </p>

                <div className="grid gap-3 mb-8">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 text-green-700">
                    <CheckCircle2 size={20} />
                    <span>Career readiness score calculated</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 text-green-700">
                    <CheckCircle2 size={20} />
                    <span>Weekly tasks generated</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 text-green-700">
                    <CheckCircle2 size={20} />
                    <span>AI coach ready to help</span>
                  </div>
                </div>

                <Link href="/dashboard" className="block">
                  <Button className="w-full">Go to dashboard</Button>
                </Link>
              </div>
            </>
          )}
        </Card>
      </div>
    </main>
  );
}
