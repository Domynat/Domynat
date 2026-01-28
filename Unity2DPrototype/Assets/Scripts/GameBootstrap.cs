using System;
using System.IO;
using UnityEngine;

public class GameBootstrap : MonoBehaviour
{
    [SerializeField] private string initialStateFileName = "initial_state.json";
    [SerializeField] private float tickIntervalSeconds = 1f;

    private GameState state;
    private float tickTimer;

    private void Start()
    {
        state = LoadInitialState();
        Debug.Log($"Loaded state. City: {state.CityName}, Gold: {state.Gold}");
    }

    private void Update()
    {
        tickTimer += Time.deltaTime;
        if (tickTimer >= tickIntervalSeconds)
        {
            tickTimer = 0f;
            Simulation.Tick(state);
            Debug.Log($"Day {state.Day}: Food {state.Resources.Food}, Wood {state.Resources.Wood}, Stone {state.Resources.Stone}");
        }
    }

    private GameState LoadInitialState()
    {
        var path = Path.Combine(Application.streamingAssetsPath, initialStateFileName);
        if (!File.Exists(path))
        {
            Debug.LogWarning($"Initial state not found at {path}, using defaults.");
            return GameState.CreateDefault();
        }

        var json = File.ReadAllText(path);
        try
        {
            return JsonUtility.FromJson<GameState>(json);
        }
        catch (Exception ex)
        {
            Debug.LogWarning($"Failed to parse initial state JSON: {ex.Message}");
            return GameState.CreateDefault();
        }
    }
}
