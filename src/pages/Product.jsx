import { Container, Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const Product = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" py={8}>
        <Heading as="h2" size="lg">
          Vitatrack Product Details
        </Heading>
        <Text fontSize="lg" mt={4}>
          Vitatrack is a state-of-the-art healthcare monitor designed to keep track of your vital signs and ensure your well-being. With Vitatrack, you can monitor your health anytime, anywhere.
        </Text>
        <Image src="https://images.unsplash.com/photo-1581091870621-1f9d9a7f1b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbW9uaXRvcnxlbnwwfHx8fDE3MTY5MjUwNjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vitatrack Monitor" mt={4} borderRadius="md" />
      </Box>
    </Container>
  );
};

export default Product;
