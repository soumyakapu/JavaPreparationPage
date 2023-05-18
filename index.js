
var links =[
    {Text : "CoreJava", URL:"https://java2blog.com/core-java-interview-questions-and-answers/", color:"DodgerBlue"},
    {Text : "JavaCollections", URL:"https://java2blog.com/java-collections-interview-questions/", color:"DodgerBlue"},
    {Text : "Java8", URL:"https://java2blog.com/java-8-tutorial/", color:"DodgerBlue"},
    {Text : "Hibernate", URL:"https://www.tutorialspoint.com/hibernate/hibernate_quick_guide.htm/", color:"DodgerBlue"},
    {Text : "SpringFramework", URL:"https://java2blog.com/introduction-to-spring-framework/", color:"DodgerBlue"},
    {Text : "SpringBoot", URL:"https://java2blog.com/spring-boot-tutorial/", color:"DodgerBlue"},
    {Text : "SpringMvc", URL:"https://java2blog.com/spring-mvc-tutorial/", color:"DodgerBlue"}

];
var centralLink = { text: "Center Link", url: "https://example.com/center" };
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 180;
    var angle = (2 * Math.PI) / links.length;

    links.forEach(function(link, index) {
      var linkX = centerX + radius * Math.cos(index * angle);
      var linkY = centerY + radius * Math.sin(index * angle);
    //   var b = createLinkElement(link, linkX, linkY);
    //   canvas.appendChild(b);
      var a = document.createElement("a");
      a.href = link.URL;
    //   a.textContent = link.Text;
      a.style.position = "absolute";
      a.style.left = linkX + "px";
      a.style.top = linkY + "px";
      a.classList.add("link");
      a.style.backgroundColor = link.color;
      var span = document.createElement("span");
      span.textContent = link.Text;
      a.appendChild(span);
      document.body.appendChild(a);
      
//   a.style.transform = `translate(${linkX}px, ${linkY}px)`;
    });
