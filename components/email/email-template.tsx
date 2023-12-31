interface EmailTemplateProps {
  firstName: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  content,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>{content}</p>
  </div>
);
