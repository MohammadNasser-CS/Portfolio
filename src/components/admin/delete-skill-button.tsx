"use client";

import { deleteSkill } from "@/utils/actions/skills";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteSkillButtonProps {
  skillId: string;
  skillName: string;
}

export function DeleteSkillButton({
  skillId,
  skillName,
}: DeleteSkillButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(`Are you sure you want to delete "${skillName}"?`)) {
      return;
    }

    setLoading(true);
    try {
      await deleteSkill(skillId);
      router.refresh();
    } catch (error) {
      alert("Failed to delete skill");
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
