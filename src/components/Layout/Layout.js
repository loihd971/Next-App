import { Container, Row, Col, Card, Text } from "@nextui-org/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './Layout.module.scss'

function Layout(props) {
  return (
    <main>
      <Header />
      <Container className={styles.container}>
        <Row gap={2}>
          <Col span={16}>
            <Card css={{ $$cardColor: "$colors$primary" }}>
              <Card.Body>
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  1 of 2
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col span={8}>
            <Card css={{ $$cardColor: "$colors$primary" }}>
              <Card.Body>
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  2 of 2
                </Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
}

export default Layout;
