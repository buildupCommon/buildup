<%@ page language="java" contentType="text/html; charset=utf-8"
%>
<!doctype html>
<html>

<head>
    <title>${pageName}</title>
</head>

<body>
    <div id="root"></div>
    <script src="/js/react/${pageName}.bundle.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <script src="https://unpkg.com/react/umd/react.production.min.js" 
        crossorigin 
        />

    <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
        />
        
    <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
        />
        
    <script>var Alert = ReactBootstrap.Alert;</script>
</body>

</html>