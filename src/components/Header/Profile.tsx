import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Joao das Neves</Text>
          <Text color="gray.300" fontSize="small" >
            joaodasneves@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Joao das Neves" src="https://github.com/mancinilucas.png" />
    </Flex>
  );
}