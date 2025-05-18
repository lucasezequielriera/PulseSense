export default async function generateOnePager() {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });

  const marginX = 40;
  let y = 50;

  const titleColor = '#6c5ce7';
  const sectionColor = '#ff5f8d';

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(titleColor);
  doc.text('PulseSence', marginX, y);

  y += 24;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40);
  doc.text('Toma el pulso, cuida tu talento.', marginX, y);

  // Separator
  y += 20;
  doc.setDrawColor(sectionColor);
  doc.setLineWidth(1);
  doc.line(marginX, y, 555, y);

  // Benefit & Metrics
  y += 30;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(titleColor);
  doc.text('Beneficio clave', marginX, y);

  y += 18;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(60);
  doc.text('Detecta y reduce el estrés antes de que se convierta en ausentismo.', marginX, y, { maxWidth: 515 });

  y += 24;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(titleColor);
  doc.text('Métricas de éxito', marginX, y);

  // Metric cards (2x2 grid)
  y += 18;
  const cardWidth = 240;
  const cardHeight = 50;
  const gap = 20;
  const startX = marginX;

  const cardData = [
    { label: 'Ausentismo', value: '-8%', color: '#ff5f8d' },
    { label: 'Productividad', value: '+12%', color: '#6c5ce7' },
    { label: 'eNPS', value: '65', color: '#ffa801' },
    { label: 'Usuarios activos', value: '78%', color: '#00b894' },
  ];

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');

  cardData.forEach((card, idx) => {
    const row = Math.floor(idx / 2);
    const col = idx % 2;
    const x = startX + col * (cardWidth + gap);
    const yPos = y + row * (cardHeight + gap);

    // Background rectangle
    doc.setFillColor(245);
    doc.roundedRect(x, yPos, cardWidth, cardHeight, 6, 6, 'F');

    // Value
    doc.setTextColor(card.color);
    doc.setFontSize(16);
    doc.text(card.value, x + 12, yPos + 28);

    // Label
    doc.setFontSize(11);
    doc.setTextColor(60);
    doc.setFont('helvetica', 'normal');
    doc.text(card.label, x + 80, yPos + 28);
  });

  y += cardHeight * 2 + gap + 10;

  // Features
  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(titleColor);
  doc.text('Funcionalidades principales', marginX, y);
  y += 18;
  const features = [
    'Check-ins emocionales diarios',
    'Chat PulseSence 24/7 con micro–intervenciones CBT',
    'Alertas de riesgo y derivación a psicólogo',
    'Reportes anónimos y panel de tendencias',
    'Recomendaciones personalizadas (sueño, foco, mindfulness)'];
  doc.setFont('helvetica', 'normal');
  features.forEach((f) => {
    doc.text(`• ${f}`, marginX, y);
    y += 16;
  });

  // Pricing
  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(titleColor);
  doc.text('Planes y precios', marginX, y);
  y += 18;
  doc.setFont('helvetica', 'normal');
  const pricing = [
    'Starter: 3 USD por empleado / mes',
    'Growth: 5 USD por empleado / mes',
    'Enterprise: Contáctanos — WhatsApp +34 627 043 397',
  ];
  pricing.forEach((p) => {
    doc.text(`• ${p}`, marginX, y);
    y += 16;
  });

  // Compliance
  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(titleColor);
  doc.text('Privacidad & Compliance', marginX, y);
  y += 18;
  const compliance = [
    'Cumplimiento GDPR y Ley 25.326 (AR)',
    'Logs cifrados, anonimizados a 30 días',
    'Servidores UE/USA con ISO 27001; HIPAA-ready',
  ];
  doc.setFont('helvetica', 'normal');
  compliance.forEach((c) => {
    doc.text(`• ${c}`, marginX, y);
    y += 16;
  });

  // CTA
  y += 20;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(sectionColor);
  doc.text('¿Listo para cuidar la salud mental de tu equipo?', marginX, y);
  y += 18;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40);
  doc.text('Escríbenos a webfinancelab@gmail.com o agenda una demo para empezar el free-trial.', marginX, y, { maxWidth: 515 });

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(120);
  doc.text('© 2024 Synapsis – Todos los derechos reservados.', marginX, 780);

  doc.save('PulseSence-OnePager.pdf');
} 