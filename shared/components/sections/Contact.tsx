"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CTAButton } from "@/shared/components/ui/CTAButton";
import { AnimatedErrorMessage } from "@/shared/components/ui/AnimatedErrorMessage";
import { GoogleMap } from "@/shared/components/ui/GoogleMap";
import { cn } from "@/lib/utils";

export function Contact() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("form.validation.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("form.validation.emailRequired");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("form.validation.emailInvalid");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("form.validation.phoneRequired");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("form.validation.messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: t("form.success"),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || t("form.error"),
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("form.error"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t("title")} dotsPosition="left" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <Image
                  src="/images/contact_location.svg"
                  alt="Location"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <p className="text-white text-xl">{t("address")}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <Image
                  src="/images/contact_Phone_noBG.svg"
                  alt="Email"
                  width={32}
                  height={32}
                  className="w-8 h-8 px-1"
                />
              </div>
              <a
                href={`tel:${t("phone").replace(/\s/g, "")}`}
                className="text-white text-xl hover:underline"
              >
                {t("phone")}
              </a>
            </div>

            <div className="mt-5 w-full">
              <GoogleMap className="mt-5" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={t("form.name")}
                  value={formData.name}
                  onChange={handleChange}
                  className={cn(
                    "bg-white rounded text-gray-900 placeholder:text-gray-400 border-gray-300 focus-visible:border-brand-blue",
                    errors.name && "border-red-300 focus-visible:border-red-300"
                  )}
                  disabled={isSubmitting}
                />
                <AnimatedErrorMessage error={errors.name} />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder={t("form.phone")}
                  value={formData.phone}
                  onChange={handleChange}
                  className={cn(
                    "bg-white rounded text-gray-900 placeholder:text-gray-400 border-gray-300 focus-visible:border-brand-blue",
                    errors.phone && "border-red-300 focus-visible:border-red-300"
                  )}
                  disabled={isSubmitting}
                />
                <AnimatedErrorMessage error={errors.phone} />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t("form.email")}
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "bg-white rounded text-gray-900 placeholder:text-gray-400 border-gray-300 focus-visible:border-brand-blue",
                    errors.email && "border-red-300 focus-visible:border-red-300"
                  )}
                  disabled={isSubmitting}
                />
                <AnimatedErrorMessage error={errors.email} />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder={t("form.message")}
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={cn(
                    "bg-white rounded text-gray-900 placeholder:text-gray-400 border-gray-300 resize-none focus-visible:border-brand-blue",
                    errors.message && "border-red-300 focus-visible:border-red-300"
                  )}
                  disabled={isSubmitting}
                />
                <AnimatedErrorMessage error={errors.message} />
              </div>

              <CTAButton
                type="submit"
                text={isSubmitting ? t("form.sending") : t("form.send")}
                disabled={isSubmitting}
                className="w-full text-3xl"
              />

              {submitStatus.type && (
                <div
                  className={cn(
                    "p-4 rounded-md text-sm",
                    submitStatus.type === "success"
                      ? "bg-green-300/20 text-green-300 border border-green-300/50"
                      : "bg-red-300/20 text-red-300 border border-red-300/50"
                  )}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
