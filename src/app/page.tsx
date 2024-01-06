import PageLayout from "@/components/layout/PageLayout";
import Footer from "@/components/shared/Footer";
import { Card, Layout } from "antd";


export default function Home() {
  return (
    <PageLayout>
      <>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          Inner Card content
        </Card>

      </>
    </PageLayout>
  )
}
