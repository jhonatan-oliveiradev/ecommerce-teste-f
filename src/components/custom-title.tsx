interface CustomTitleProps {
  title: string;
}

export const CustomTitle = ({ title }: CustomTitleProps) => {
  return <h1 className="my-4 text-left text-2xl font-bold">{title}</h1>;
};
