qVit = int(input("Digite a quantidade de vitorias: "))
qDer = 1
qRanked = (qVit - qDer)
print(qRanked)


if qRanked < 10:
    rankedCalculator = "Ferro"
elif qRanked >= 11 and qRanked <= 20:
    rankedCalculator = "Bronze"
else:
    print("Digite um valor valido")

print(rankedCalculator)
