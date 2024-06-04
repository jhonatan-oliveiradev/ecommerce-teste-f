import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Customer = () => {
  return (
    <Avatar className="h-8 w-8 border-2 border-primary">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default Customer;
