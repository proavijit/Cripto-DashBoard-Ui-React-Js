import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PriceSection from "../../components/PriceSection";
import InfoCard from "./components/InfoCard";
import PortfolioSection from "./components/PortfolioSection";
import Transactions from "./components/Transactions";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={{
          base:1,
          xl:2
        }}>
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="../../../public/Visual.svg"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without
        selling it"
            btnText="Loans"
            Invarted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="../../../public/Visual_purple.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            btnText="contact"
            Invarted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
