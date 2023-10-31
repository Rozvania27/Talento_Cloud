#1º desafio: Escreva um código que imprima todos os números exceto o número 13
numeroAndar = 0
for i in range (20):
  numeroAndar = numeroAndar+1
  if (numeroAndar == 13):
    continue 
  print (numeroAndar)

