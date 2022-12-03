
# labEcommerce-backend

<strong>Projeto desenvolvido no módulo 5 do curso de Desenvolvimento Web Full Stack da Labenu.</strong>

## O que funciona:
<p>
<ol>
<li><strong><h3>Cadastro de usuário:</h3></strong></li>
<ul>
<li> <strong>Método:</strong> POST  </li>
<li> <strong>Path:</strong>"/users"  </li>
<li> <strong>Parâmetros via body a ser inserido:</strong> name, email e password </li>
</ul>
</p>
<p><strong>Resultado:</strong> O usuário será cadastrado e seus dados ficarão salvos no banco de dados (tabela labecommerce_users)</p>


<li><strong><h3>Busca por todos os usuários:</h3></strong></li>
<ul>
<li> <strong>Método:</strong> GET  </li>
<li> <strong>Path:</strong>"/users" </li>
<li> <strong>Parâmetros:</strong> sem parâmetros </li>
</ul>
</p>
<p><strong>Resultado:</strong> Retorna uma lista com todos os usuários cadastrados.</p>

<li><strong><h3>Cadastro de produto:</h3></strong></li>
<ul>
<li> <strong>Método:</strong> POST  </li>
<li> <strong>Path:</strong>"/products" </li>
<li> <strong>Parâmetros via body a ser inserido:</strong> name, price e image_url </li>
</ul>
</p>
<p><strong>Resultado:</strong> O produto será cadastrado e seus dados ficarão salvos no banco de dados (tabela labecommerce_products)</p>

<li><strong><h3>Busca por todos os produtos:</h3></strong></li>
<ul>
<li> <strong>Método:</strong> GET  </li>
<li> <strong>Path:</strong>"/products" </li>
<li> <strong>Parâmetros:</strong> sem parâmetros </li>
</ul>
</p>
<p><strong>Resultado:</strong> Retorna uma lista com todos os produtos cadastrados.</p>

<li><strong><h3>Registro de compra:</h3></strong></li>
<ul>
<li> <strong>Método:</strong> POST  </li>
<li> <strong>Path:</strong>"/purchases" </li>
<li> <strong>Parâmetros via body a ser inserido:</strong> user_id, product_id  e quantity </li>
</ul>
</p>
<p><strong>Resultado:</strong> O registro da compra efetuada será cadastrada e seus dados ficarão salvos no banco de dados (tabela labecommerce_purchases)</p>

<li><strong><h3>Busca das compras de um usuário:</h3></strong></li>
<ul>
<li> <strong>Método:</strong> GET  </li>
<li> <strong>Path:</strong>"/users/:user_id/purchases" </li>
<li> <strong>Parâmetros recebido via path params:</strong> user_id </li>
</ul>
</p>
<p><strong>Resultado:</strong> Retorna uma lista com todas as compras do usuário informado.</p>
</ol>

## Documentação

[Documentação](https://documenter.getpostman.com/view/22350736/2s8YzL5n6G)

## Stack utilizada
<img src="https://skillicons.dev/icons?i=ts,nodejs, mysql," /> 
<p>Express e Knex.</p>


