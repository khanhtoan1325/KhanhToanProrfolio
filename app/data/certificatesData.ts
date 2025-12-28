export type Certificate = {
  id: string;
  title: string;
  recipientName: string;
  courseName: string;
  issuer: string;
  partner?: string;
  issuedDate: string;
  credentialId?: string;
  verifyUrl?: string;
  image: string;
  notes?: string;
};

export const certificates: Certificate[] = [
  {
    id: "cisco-js-essentials-1",
    title: "Statement of Achievement",
    recipientName: "Nguyen Khanh Toan",
    courseName: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    partner: "OpenEDG JavaScript Institute (JS Institute)",
    issuedDate: "29/11/2025",
    image: "/javaScript1.png",
    notes:
      "Student level credential - hoàn thành khóa JavaScript Essentials 1 (Cisco NetAcad + JS Institute).",
  },
  {
    id: "cisco-js-essentials-2",
    title: "Statement of Achievement",
    recipientName: "Nguyen Khanh Toan",
    courseName: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    partner: "OpenEDG JavaScript Institute (JS Institute)",
    issuedDate: "09/12/2025",
    image: "/javaScript2.png",
    notes:
      "Student level credential - hoàn thành khóa JavaScript Essentials 2 (Cisco NetAcad + JS Institute).",
  },

  {
    id: "cisco-networking-basics",
    title: "Certificate of Course Completion",
    recipientName: "Nguyen Khanh Toan",
    courseName: "Networking Basics",
    issuer: "Cisco Networking Academy",
    issuedDate: "23/11/2025",
    image: "/NetWorking.png",
    notes:
      "Student level credential - hoàn thành khóa Networking Basics (Cisco NetAcad).",
  },
];
