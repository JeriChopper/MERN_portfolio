// src/components/Projectpage.js

/**
 * Project page component
 * 
 * This component renders the project page which includes projects which are fetched from the backend.
 * Cards include the fetched data
 * 
 * Styling made with React Bootstrap
 * 
 * 
 * @returns {JSX.Element}
 * 
 * 
 * I used react-bootstrap docs to create the cards: https://react-bootstrap.netlify.app/docs/components/cards
*/

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projectpage = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/projects');
                const data = await response.json();
                setProjectData(data); 
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">My Projects</h1>
            <Row>
                {projectData.length > 0 ? (
                    projectData.map((project, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card className="h-100">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                                    <ul>
                                        {project.technologies.map((tech, i) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                    </ul>
                                    <Button variant="secondary" href={project.githubLink} target="_blank">
                                        GitHub Repository
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No projects found</p>
                )}
            </Row>
        </Container>
    );
};

export default Projectpage;
