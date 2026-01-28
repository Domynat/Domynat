public static class Simulation
{
    public static void Tick(GameState state)
    {
        state.Day += 1;
        Produce(state);
        Consume(state);
        ApplyTaxes(state);
    }

    private static void Produce(GameState state)
    {
        state.Resources.Food += 6;
        state.Resources.Wood += 4;
        state.Resources.Stone += 2;
        state.Resources.Iron += 1;
    }

    private static void Consume(GameState state)
    {
        state.Resources.Food = System.Math.Max(0, state.Resources.Food - 5);
    }

    private static void ApplyTaxes(GameState state)
    {
        state.Gold += 3;
    }
}
