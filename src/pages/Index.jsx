import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const Index = () => {
  const [selectedRow, setSelectedRow] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have selected row: ${selectedRow}`);
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5}>
      <Heading mb={6}>Normal Form Game</Heading>
      <Box width="full" maxW="md">
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="row-select">Select Your Strategy (Row)</FormLabel>
            <Select id="row-select" placeholder="Select row" onChange={(e) => setSelectedRow(e.target.value)}>
              <option value="Row 1">Row 1</option>
              <option value="Row 2">Row 2</option>
              <option value="Row 3">Row 3</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4} isFullWidth>
            Submit Strategy
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Index;