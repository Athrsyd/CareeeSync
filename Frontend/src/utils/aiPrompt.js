const aiPrompt = (careerData, SkillsMastery, readiness) => {
  return `Kamu adalah AI career analyst.

Berikut data user:

Career: ${careerData?.career_name}

Skills:
${SkillsMastery
  .map(
    (skill) => `
- ${skill.name} (${skill.mastered ? "dikuasai" : "belum"}) bobot: ${skill.weight}
`,
  )
  .join("")}

Readiness Score: ${readiness}%

Tugas kamu:
1. Analisis kondisi skill user
2. Jelaskan kekurangan utama
3. Berikan saran konkret untuk improvement
4. Gunakan bahasa profesional tapi mudah dipahami
`;}

export default aiPrompt;