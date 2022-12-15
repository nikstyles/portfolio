const ReviewsDetails = ({ reviews }) => {
  return (
    <ul style={{ margin: '20px 20px 20px 0px' }}>
      {reviews?.map(({ content, author, id }) => {
        return (
          <li key={id}>
            <p style={{ fontWeight: 'bold' }}>{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsDetails;
