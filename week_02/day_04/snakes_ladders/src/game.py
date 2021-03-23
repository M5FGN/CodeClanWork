class Game:

    def __init__(self, board, dice, players):
        self.board = board
        self.dice = dice
        self.players = players
        self.is_won = False
        self.current_player = players[0]


    def play(self):
        self.player_turn()
        self.check_modifier()
        self. rotate_player


    def player_turn(self):
        moves = self.current_player.roll_dice(self.dice)
        self.current_player.move(moves)

    def check_modifier(self):
        current_position = self.current_position.counter.position
        modifiers = self.board.modifiers
        if current_position in modifiers:
            self.current_player.move(modifiers[current_position])

    def rotate_player(self):
        number_of_players = len(self.players)
        current_index = self.players.index(self.current_player)
        if current_index + 1 == number_of_players:
            self.current_player = self.players[0]
        else:
            self.current_player = self.player[current_player]
