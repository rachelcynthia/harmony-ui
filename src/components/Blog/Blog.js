import React, { useEffect } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const Blog = (cards) => {
    const Arrow = ({ text, className }) => {
        return (
            <div
                className={className}
            >{text}</div>
        );
    };


    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

    const BlogCard = ({title, itemId}) => {
        console.log("called");
        return (
            <div className="blog-card">
                <h4>Blog card</h4>
                {title}
            </div>
        );
    };

    // console.log(cards)
    return (
        <div className="blog-list-container">
            <ScrollMenu
                LeftArrow={ArrowLeft}
                RightArrow={ArrowRight}
            >
                {cards.cards.map(({ card }, index) => (
                    <BlogCard
                        title={card.title}
                        itemId={index}
                        key={index}
                    />
                ))}
            </ScrollMenu>
        </div>
    );
}

Blog.defaultProps = {
    cards: []
}

export default Blog;