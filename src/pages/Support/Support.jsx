import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import SupportInfoCard from "./components/SupportInfoCard";


const Support = () => {
  return (
    <DashboardLayout>
      <SupportCard />

      <Grid>
        <GridItem colSpan="">
          <SupportInfoCard
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

export default Support;
