export const recipientEmail = "xuanxian2001@gmail.com";

export const contactEmailHref = `mailto:${recipientEmail}?subject=${encodeURIComponent(
  "Portfolio inquiry",
)}`;

export const contactFormEndpoint = `https://formsubmit.co/ajax/${recipientEmail}`;
