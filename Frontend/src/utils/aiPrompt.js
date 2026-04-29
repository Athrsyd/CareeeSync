const aiPrompt = (careerData, skillsMastery, readiness) => {
  return `
Kamu adalah AI career analyst profesional.

Berikut data user:

Career: ${careerData?.career_name}

Skills:
${(skillsMastery || [])
  .map(
    (skill) => `
- ${skill.name} (${skill.mastered ? "dikuasai" : "belum"}) | bobot: ${skill.weight}
`,
  )
  .join("")}

Readiness Score: ${readiness.toFixed(0)}%

Tugas kamu:
Analisis kondisi user berdasarkan data di atas.

⚠️ WAJIB gunakan format berikut:

=== RINGKASAN ===
(Tuliskan ringkasan kondisi user secara singkat)

=== KELEBIHAN ===
(Sebutkan skill yang sudah kuat)

=== KEKURANGAN ===
(Sebutkan skill yang masih lemah atau belum dikuasai)

=== SARAN ===
(Berikan saran konkret dan actionable untuk meningkatkan skill)

Gunakan bahasa Indonesia yang profesional, jelas, dan tidak bertele-tele.
`;
};

export default aiPrompt;
