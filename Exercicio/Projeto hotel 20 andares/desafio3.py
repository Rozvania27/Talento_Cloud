#3º desafio:  imprima em ordem decrescente (20, 19, 18...)
numeroAndar = 21
for i in range (20):
  numeroAndar = numeroAndar-1
  if (numeroAndar == 13):
    continue 
  print (numeroAndar)
