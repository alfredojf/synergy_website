"""empty message

Revision ID: a832cc3704ee
Revises: None
Create Date: 2016-02-14 01:22:22.282147

"""

# revision identifiers, used by Alembic.
revision = 'a832cc3704ee'
down_revision = None

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_table('usuario',
    sa.Column('clave', sa.String(), nullable=True),
    sa.Column('nombre_completo', sa.String(), nullable=True),
    sa.Column('correo', sa.String(), nullable=True),
    sa.Column('nombre_usuario', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('nombre_usuario')
    )
    op.create_table('pagina',
    sa.Column('titulo', sa.String(), nullable=True),
    sa.Column('contenido', sa.String(), nullable=True),
    sa.Column('id_usuario', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['id_usuario'], ['usuario.nombre_usuario'], ),
    sa.PrimaryKeyConstraint('id_usuario')
    )
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pagina')
    op.drop_table('usuario')
    ### end Alembic commands ###
