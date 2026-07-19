"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/nav";
import { PROBLEM_OPTIONS } from "@/lib/lead-form";

type LeadFormValues = {
  name: string;
  business: string;
  website: string;
  contact: string;
  problem: string;
  hp: string;
};

type LeadFormProps = {
  source: "audit" | "contact";
};

export function LeadForm({ source }: LeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormValues>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(values: LeadFormValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-success bg-brand-primary-light/40 p-6 text-body text-text-primary">
        Got it. I&apos;ll get back to you within one business day.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("hp")}
      />

      <Input label="Your name" required {...register("name", { required: "Please fill this in" })} error={errors.name?.message} />
      <Input
        label="Business name"
        required
        {...register("business", { required: "Please fill this in" })}
        error={errors.business?.message}
      />
      <Input label="Website" placeholder="yourbusiness.com" {...register("website")} />
      <Input
        label="Email or phone"
        required
        placeholder="you@business.com or (813) 555-0123"
        {...register("contact", { required: "Please fill this in" })}
        error={errors.contact?.message}
      />
      <Select
        label="What's your biggest problem right now?"
        placeholder="Select one"
        required
        options={PROBLEM_OPTIONS}
        {...register("problem", { required: "Please fill this in" })}
        error={errors.problem?.message}
      />

      {status === "error" && (
        <p role="alert" className="text-small text-error">
          {`Something went wrong. Email me directly at ${CONTACT_EMAIL} and I'll sort it out.`}
        </p>
      )}

      <Button type="submit" loading={isSubmitting} className="justify-center">
        Send My Request
      </Button>
      <p className="text-small text-text-secondary">
        I&apos;ll never share your information. See the{" "}
        <Link href="/privacy-policy/" className="font-semibold text-brand-primary hover:underline">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
