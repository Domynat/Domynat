using System;
using UnityEngine;

[Serializable]
public class GameState
{
    public string CityName;
    public int Day;
    public int Gold;
    public ResourceStock Resources;

    public static GameState CreateDefault()
    {
        return new GameState
        {
            CityName = "Domynat",
            Day = 1,
            Gold = 100,
            Resources = new ResourceStock
            {
                Food = 50,
                Wood = 30,
                Stone = 20,
                Iron = 10,
                Textiles = 5,
                Livestock = 8
            }
        };
    }
}

[Serializable]
public class ResourceStock
{
    public int Food;
    public int Wood;
    public int Stone;
    public int Iron;
    public int Textiles;
    public int Livestock;
}
