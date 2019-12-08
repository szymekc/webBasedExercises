
from AppConfig import app
from flask_graphql import GraphQLView
from Schema import schema
import RestEndpoints # do not remove


app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True # for having the GraphiQL interface
    )
)
