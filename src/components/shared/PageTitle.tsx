type PageTitleProps = {
  title: String;
  description: any;
  className?: any;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, description, className }) => {
  return (
    <div className={className}>
      <h1 className="text-gray-950 text-[20px] font-semibold">{title}</h1>
      <p className="text-[15px] text-gray-400 font-light">{description}</p>
    </div>
  );
};

export default PageTitle;
