exports.parseCreateAuthor = body => ({
  firstName: body.first_name,
  lastName: body.last_name,
  email: body.email,
  dateOfBirth: body.date_of_birth
});

exports.parseCreatePublication = body => ({
  authorId: body.author_id,
  title: body.title,
  body: body.body
});
