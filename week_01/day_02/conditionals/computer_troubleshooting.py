# START

    # Boot = Input: Did Computer Boot Up?
        # If Yes
            # Print 'Log in with password'
            # FINISH
        
        # If No
            # Plugged_In = Input:is it plugged in?
                # If Yes - Is Plugged In
                    # Output - Computer is broken
                    # FINISH

                # If No
                    # Fix = Input: Plug it In'Did this fix the problem?
                        # If Yes - Log in with password
                        # FINISH
                    # If No 
                        # Output - The computer is broken.
                        # FINISH

boot = input('Did Computer Boot Up: ').upper()

if boot == 'YES':
    print('Log in with password')
else: 
    # print('Computer is Off')
    plugged_in = input('Is it plugged in?: ').upper()
    if plugged_in == 'YES':
        print('Computer is Broken')
    else:
        print('Plug it in')
        fix = input('Did this fix the problem?: ').upper()
        if fix == 'YES':
                print('Log in with password')
        else:
            print('Computer is Broken')