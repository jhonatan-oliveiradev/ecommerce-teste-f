import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const Customer = () => {
  return (
    <div className="flex items-center rounded-full border-2 border-primary">
      <SignedOut>
        <div className="hidden">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            baseTheme: dark,
          }}
          afterSignOutUrl="/"
        />
      </SignedIn>
    </div>
  );
};

export default Customer;
