import { Container, Box, Heading, Text, VStack, HStack, IconButton, Image, Link, Divider } from "@chakra-ui/react";
import { FaHeartbeat, FaMobileAlt, FaShieldAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="teal.500" color="white" py={4} textAlign="center">
        <Heading as="h1" size="xl">
          Vitatrack
        </Heading>
        <Text>Your Health, Our Priority</Text>
      </Box>

      {/* Main Content */}
      <VStack spacing={8} py={8}>
        {/* Introduction */}
        <Box textAlign="center">
          <Heading as="h2" size="lg">
            Welcome to Vitatrack
          </Heading>
          <Text fontSize="lg" mt={4}>
            Vitatrack is a state-of-the-art healthcare monitor designed to keep track of your vital signs and ensure your well-being. With Vitatrack, you can monitor your health anytime, anywhere.
          </Text>
          <Image src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbW9uaXRvcnxlbnwwfHx8fDE3MTY5MjUwNjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vitatrack Monitor" mt={4} borderRadius="md" />
        </Box>

        {/* Features */}
        <Box w="100%">
          <Heading as="h3" size="md" textAlign="center" mb={4}>
            Features
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack>
              <IconButton aria-label="Heart Rate Monitoring" icon={<FaHeartbeat />} size="lg" isRound />
              <Text>Heart Rate Monitoring</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="Mobile App Integration" icon={<FaMobileAlt />} size="lg" isRound />
              <Text>Mobile App Integration</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="Data Security" icon={<FaShieldAlt />} size="lg" isRound />
              <Text>Data Security</Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>

      <Divider />

      {/* Footer */}
      <Box as="footer" py={4} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Vitatrack. All rights reserved.</Text>
        <HStack spacing={4} justify="center" mt={2}>
          <Link href="https://facebook.com" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" isRound />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" isRound />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" isRound />
          </Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;
