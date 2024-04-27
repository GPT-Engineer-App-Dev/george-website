import { Box, Flex, Heading, Text, Image, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl" textAlign="center">
          George Clinton
        </Heading>
        <Text mt={4} textAlign="center" color="gray.600">
          Composer | Musician | Innovator
        </Text>
      </Box>
      <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHZW9yZ2UlMjBDbGludG9uJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE0MjM0MjU3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="George Clinton" m={4} />
      <Text fontSize="md" p={5} textAlign="center">
        George Clinton is a pioneer of funk music and has been a major influence on the development of funk, rock, and hip-hop music. Explore more about his life, music, and legacy.
      </Text>
      <VStack spacing={4}>
        <Link href="https://twitter.com/george_clinton" isExternal>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} />
        </Link>
        <Link href="https://facebook.com/george_clinton" isExternal>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} />
        </Link>
        <Link href="https://instagram.com/george_clinton" isExternal>
          <IconButton aria-label="Instagram" icon={<FaInstagram />} />
        </Link>
        <Link href="https://linkedin.com/in/george_clinton" isExternal>
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
        </Link>
        <Link href="mailto:george.clinton@example.com">
          <IconButton aria-label="Email" icon={<FaEnvelope />} />
        </Link>
      </VStack>
    </Flex>
  );
};

export default Index;
