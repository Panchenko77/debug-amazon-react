"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  theme: string | "light" | "dark";
  heroBkg?: boolean | false;
  hideActionButton: boolean;
  logoImageVisible?: boolean;
  isUserLogged?: boolean;
}

const Header = ({
  theme,
  heroBkg,
  hideActionButton,
  logoImageVisible,
  isUserLogged,
}: Props) => {
  const router = useRouter();

  const logout = async () => {
    try {
      const endpoint = "http://localhost:3000";
      const response = await axios.post(endpoint);
      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <div className="mx-auto px-20 py-10 relative">
        <div className="flex flex-wrap justify-center xl:justify-between items-center gap-12">
          <div
            className={`lg:text-black text-2xl font-extrabold z-40 ${
              theme === "dark" ? "text-black" : "text-white"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div>
                <span>Turigma.ai</span>
              </div>
              {logoImageVisible === undefined && (
                <Image
                  src="/Turigma logo transparent 1.png"
                  alt="logo"
                  width={90}
                  height={30}
                />
              )}
            </div>
          </div>
          <div className="z-40 hidden lg:block">
            <ul className="flex flex-wrap justify-center items-center gap-20">
              {isUserLogged ? (
                <>
                  <li>
                    <Link
                      href="/"
                      className={theme === "dark" ? "text-dark" : "text-white"}
                    >
                      Caller Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className={theme === "dark" ? "text-dark" : "text-white"}
                    >
                      Caller Feedback
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className={theme === "dark" ? "text-dark" : "text-white"}
                    >
                      Manager Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className={theme === "dark" ? "text-dark" : "text-white"}
                    >
                      Campaign Research
                    </Link>
                  </li>

                  <button
                    onClick={() => logout()}
                    className="py-2 px-6 bg-[#0077c8] text-white w-fit h-fit rounded-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/"
                      className={theme === "dark" ? "text-dark" : "text-white"}
                    >
                      PreSales AI
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className={theme === "dark" ? "text-dark" : "text-white"}
                    >
                      Benefits
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className={theme === "dark" ? "text-dark" : "text-white"}
                    >
                      Easy
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className={theme === "dark" ? "text-dark" : "text-white"}
                    >
                      Blog
                    </Link>
                  </li>

                  {hideActionButton === false && (
                    <button
                      onClick={() => router.push("/login")}
                      className="py-6 px-16 bg-white rounded-full"
                    >
                      Sign In
                    </button>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          {heroBkg === true ? (
            <Image
              src="/hero-background.png"
              width={1100}
              height={300}
              alt="bkg"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
