/*

1. res.end() 
// eta holo user ke server theke disconnect korar jonno use hoy . etake bole stateless protocol
// eta diyeo ami browser e kisu show koraite parbo res.write er moto kaj korte parbo kintu eta recommended way na . best way holo res.write() diye browser e kichu koro and kaj sesh hoye gele res.end() user er sathe server er disconnect koro. 

2. res.write()
// eta response er result dekhanor jonno use hoy 

3. res.writeHead() 
// eta diye response je pathaitesi server theke browser e seta ki type er data seta bole deya hoy browser ke . eta browser er header e save hoy
// jodi response er data ki type er seta declare na kore dei tahole browser jodi nije theke bujhte pare eta ki dhoroner data tahole se sei datar response er header e Content-Type sei response datar type declare kore dey . kintu eta best way na . amader prottekta response er sathe Content-Type bole dite hobe 
// Example:
res.writeHead(200, {'Content-Type':'text/plain'})

4. res.setHeader() 
// eta same kaj kore res.writeHead() er motoii . just syntext ta alada 
// Example : 
res.setHeader('Content-Type','text/plain')


*/