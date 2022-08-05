import React from 'react';
import { Card } from 'react-bootstrap';

const Extet = () => {
    return (
        <div className="my-5">
            <Card className="bg-dark text-white">
                <Card.Img src="https://media-exp1.licdn.com/dms/image/C4D1BAQGGdNo6IlDOCQ/company-background_10000/0/1519801807380?e=2159024400&v=beta&t=VWHuXHsmYAXZB4XQn7H63FLLvHjjMfs6CdxCh3HwcCM" alt="Card image" height={600} />
                <Card.ImgOverlay>
                    <Card.Title>National Travel Service, Inc.</Card.Title>
                    <Card.Text>
                        Optimize your travel program for Better, Faster, and Cheaper Travel Management!.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Extet;