import { Box, Flex, Heading, Image, Spacer, Tabs, TabList, Tab, Avatar, Button } from "@chakra-ui/react";
import bg from "../media/images/heading-bg.jpg";
import logo from "../media/images/guruji-logo.png";
import userLogo from "../media/images/userlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faWallet, faLock, faFileContract, faShield } from '@fortawesome/free-solid-svg-icons';

const iconAndText = [
  { icon: faHeadset, text: "24x7 customer support" },
  { icon: faWallet, text: "100% refund if Unsatisfied" },
  { icon: faLock, text: "Private and confidential" },
  { icon: faFileContract, text: "Verified Astrologer" },
  { icon: faShield, text: "Secure Payment" },
];

function Navbar() {
  return (
    <Box
      as="nav"
      backgroundImage={`url(${bg})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="auto"
      px={6}
     
    >
      <Flex alignItems="top">
        <Image src={logo} alt="Logo" height="40px" mr={4} mt="1rem"/>
        <Heading size="md" color="white" mt="1rem">
          Guruji
        </Heading>
        <Spacer />
        <Tabs variant="unstyled" color="white" mt="1rem">
          <TabList w="100%" justifyContent="center">
            <Tab _hover={{ bg: "rgba(0, 0, 0, 0.5)", fontWeight:"bold"}}>Home</Tab>
            <Tab _hover={{ bg: "rgba(0, 0, 0, 0.5)", fontWeight:"bold"}}>Call with Astrologer</Tab>
            <Tab _hover={{ bg: "rgba(0, 0, 0, 0.5)", fontWeight:"bold"}}>Live (Coming Soon)</Tab>
          </TabList>
        </Tabs>
        <Spacer />
        <Avatar size="md" name="User" src={userLogo} ml={6} mt="1rem"/>
      </Flex>
      <Box textAlign="center" mt="2rem" color="white">
        <Heading size="lg"  mt="1rem">
          "Astrology for Clarity"
        </Heading>
        <Box mt={4}>Your Name is a Vedic astrologer and has experties in vaastu and mantra therophy</Box>
        <Button colorScheme="orange" mt={4}>Book a Consultation</Button>
      </Box>
      <Flex alignItems="center" justifyContent="center" mt="2rem">
        {iconAndText.map(({ icon, text }) => (
          <>
          <Box key={text} display="flex" alignItems="center" textAlign="center" width="100%" maxWidth="150px" mt="2rem" color="white"  mb={8}>
            <Box as={FontAwesomeIcon} icon={icon} style={{color: "#ffffff"}} width={6} />
            <Box ml={2} fontSize="sm" whiteSpace="wrap" >{text}</Box>
          </Box>
          <Spacer />
          </>
        ))}
      </Flex>
    </Box>
  );
}

export default Navbar;
