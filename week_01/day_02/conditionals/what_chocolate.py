# SET chocolate = IPUT 'What is your favourite chocolate?'
# IF chocolate is 'Bounty'
    # THEN PRINT 'gross'
# ELSE IF choloate is 'snickers'
    # PRINT 'thats my favourite'
# ELSE 
    # PRINT 'yum'
# END

chocolate = input('What is your favourite chocolate?: ')

if chocolate == 'bounty':
    print('gross')
elif chocolate == 'snickers':
    print('Thats my favourite.')
else:
    print('yum')
