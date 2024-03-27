export const IssueTypes = {
    support: 'support',
    feedback: 'feedback'
};

export interface ContactFormData {
  name: string;
  email: string;
  issue: string;
  description: string;
}