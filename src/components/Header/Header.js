import {
  Navbar,
  Text,
  Button,
  Link,
  Input,
  Dropdown,
  Avatar,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";
import { Switch, useTheme } from "@nextui-org/react";
import { HiOutlineSun, HiMoon, HiSearch } from "react-icons/hi";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineLinkedin,
} from "react-icons/ai";
import styles from "./Header.module.scss";
import Logo from "../../../public/logo.png";

function Header() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const collapseItems = [
    "Home",
    "Category",
    "Contact",
    "About me",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];
  const currentUser = "EvanLoi";

  return (
    <Navbar isBordered variant="sticky" className={styles.navbar}>
      <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
          <Image width={50} height={50} src={Logo} alt="Logo" />
        </Text>
      </Navbar.Brand>
      {/* <Navbar.Content>     <Image  width={50} height={50} src={Logo} alt="Logo"  /></Navbar.Content> */}
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="highlight-solid-rounded"
      >
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Category</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">About me</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Item>
          <div className={styles.navbarIcon}>
            <Text b color="inherit" hideIn="xs">
              <AiFillTwitterCircle className={styles.icon} />
            </Text>
            <Text b color="inherit" hideIn="xs">
              <AiFillGithub className={styles.icon} />
            </Text>
            <Text b color="inherit" hideIn="xs">
              <AiOutlineLinkedin className={styles.icon} />
            </Text>

            {isDark ? (
              <HiMoon
                className={styles.icon}
                onClick={() => setTheme("light")}
              />
            ) : (
              <HiOutlineSun
                className={styles.icon}
                onClick={() => setTheme("dark")}
              />
            )}
          </div>
        </Navbar.Item>
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            clearable
            contentLeft={<HiSearch />}
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>

        {!currentUser ? (
          <>
            <Navbar.Link color="inherit" href="#">
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} href="#">
                Sign Up
              </Button>
            </Navbar.Item>
          </>
        ) : (
          <>
            <Dropdown placement="bottom-right">
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>

              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    evanloi@example.com
                  </Text>
                </Dropdown.Item>

                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
