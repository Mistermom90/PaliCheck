function palidrome()
{
    var word1 = document.getElementById("firstPali");
    var word2 = document.getElementById("secondPali");

    var i = 0;
    var reversed = ""
    for (i = word1.length-1;i>=0;i--)
    {
        reversed += word1[i];
    }
    if (reversed == word1)
    {
        document.getElementById("word Info").innerHTML = "PALINDROME";
    }
    else 
    {
        document.getElementById("word Info").innerHTML = "NOT A PALINDROME";
    }
}