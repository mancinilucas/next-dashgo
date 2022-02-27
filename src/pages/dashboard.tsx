import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(()=> import('react-apexcharts'),{
  ssr: false //server side rendering está desabilitado, render no client
})

const options: ApexOptions = {
  chart: {
    toolbar:{
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid:{
    show: false,
  },
  dataLabels:{
    enabled: false,
  },
  tooltip:{
    enabled: false,
  },
  xaxis:{
    type: 'datetime',
    axisBorder:{
      color: theme.colors.gray[600]
    },
    axisTicks:{
      color: theme.colors.gray[600]
    },
    categories:[
      '2021-02-22T00:00:00.000Z',
      '2021-02-23T00:00:00.000Z',
      '2021-02-24T00:00:00.000Z',
      '2021-02-25T00:00:00.000Z',
      '2021-02-26T00:00:00.000Z',
      '2021-02-27T00:00:00.000Z',
      '2021-02-28T00:00:00.000Z',
    ],
  },
  fill: {}
}  // Sem a tipagem do ApexOptions usar -> 'as const' ao final da declaração;

const series = [
  { name: "series1", data: [31, 120, 10, 28, 51, 18, 189]}
]

export default function Dashboard(){
  return(
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
};