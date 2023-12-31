import {
  HamburgerIcon,
  MenuListItems,
  NeoMarketLogo,
  SearchForm,
  UserContent,
} from '@/components';
import Link from 'next/link';

export interface HeaderProps {
  children?: React.ReactNode;
}

function MobileHeader({ children }: HeaderProps) {
  return (
    <div className="drawer sm:hidden min-h-screen relative z-10">
      <input id="drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <div className="bg-primary absolute top-0 w-full z-10 p-3 pr-7 flex justify-between items-center">
          <label
            htmlFor="drawer"
            className="btn btn-circle drawer-button btn-ghost text-yellow"
          >
            <HamburgerIcon />
          </label>

          <Link href="/" prefetch={false}>
            <NeoMarketLogo />
          </Link>
        </div>

        <div className="mt-20 px-2">{children}</div>
      </div>

      <div className="drawer-side z-20">
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <ul className="menu bg-primary p-4 max-w-80 h-full">
          <UserContent />

          <div className="w-full my-10">
            <SearchForm />
          </div>

          <MenuListItems />
        </ul>
      </div>
    </div>
  );
}

function DesktopHeader() {
  return (
    <div className="bg-primary hidden sm:block relative z-10">
      <div className="navbar px-5 py-6">
        <div className="flex w-full max-w-5xl mx-auto items-center justify-between">
          <Link href="/" prefetch={false} className="pr-16">
            <NeoMarketLogo />
          </Link>

          <SearchForm />

          <UserContent />
        </div>
      </div>

      <div className="navbar bg-secondary py-0 items-end h-12 min-h-fit">
        <ul className="menu menu-horizontal mx-auto py-0">
          <MenuListItems />
        </ul>
      </div>
    </div>
  );
}

export default function Header({ children }: HeaderProps) {
  return (
    <header>
      <DesktopHeader />
      <MobileHeader>{children}</MobileHeader>
    </header>
  );
}
