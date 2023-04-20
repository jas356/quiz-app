import { Container, Row, Col } from "react-bootstrap"
import { GitHub } from "react-bootstrap"

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const githubLink = "https://github.com/jas356/quiz-app"

    return(
        <footer>
            <Container>
                <Row>
                    <Col>
            <p><small>&copy; {currentYear}</small>
            <br />
            <a href={githubLink} target="_blank" rel="nonreferrer">Code In Github</a>
            </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}