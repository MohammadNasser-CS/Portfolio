"use client";

import { deleteExperience } from "@/utils/actions/experience";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteExperienceButtonProps {
  experienceId: string;
  position: string;
}

export function DeleteExperienceButton({
  experienceId,
  position,
}: DeleteExperienceButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(`Are you sure you want to delete "${position}"?`)) {
      return;
    }

    setLoading(true);
    try {
      await deleteExperience(experienceId);
      router.refresh();
    } catch (error) {
      alert("Failed to delete experience");
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="px-4 py-2 text-sm border border-destructive text-destructive rounded-lg hover:bg-destructive/10 transition-colors disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
